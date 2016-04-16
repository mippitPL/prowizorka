class PictureRepository
  def split_base64(uri_str)
    result = uri_str.match(/^data:(.*?);(.*?),(.*)$/)
    {
      type:      result[1],
      encoder:   result[2],
      data:      result[3],
      extension: result[1].split('/')[1],
    }
  end

  def persist(filename, photo_image_data_uri)
    image_data = split_base64(photo_image_data_uri)
    binary_image = Base64.decode64(image_data[:data])
    uploader = PictureUploader.new

    tmpfile = make_tempfile(binary_image)
    uploader.store!(ActionDispatch::Http::UploadedFile.new({
      filename: "#{filename}_#{current_timestamp}.#{image_data[:extension]}",
      type:     image_data[:type],
      tempfile: tmpfile,
    }))
    close_tempfile(tmpfile)

    return uploader.url
  end

  private

  def current_timestamp
    Time.now.to_i
  end

  def make_tempfile(binary_file)
    tmpfile = Tempfile.new('')
    tmpfile.binmode
    tmpfile << binary_file
    tmpfile.rewind
    tmpfile
  end

  def close_tempfile(tmpfile)
    tmpfile.close
    tmpfile.unlink
  end
end
