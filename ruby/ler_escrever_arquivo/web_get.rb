require 'net/http'

example = Net::HTTP.get('example.com', '/index.html')

File.open('example.com', 'w') do |line|
  line.puts(example)
end