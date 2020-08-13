require 'pry-rails'
require 'roo'

subs = Roo::Spreadsheet.open('./relacao_sub_promo.xlsx')
gds = Roo::Spreadsheet.open('./relacao_gd_promo.xlsx')

worksheets = gds.sheets
puts "Found #{worksheets.count} worksheets"

worksheets.each do |worksheet|
  #puts "Reading: #{worksheet}"
  num_rows = 0
  gds.sheet(worksheet).each_row_streaming do |row|
    row_cells = row.map { |cell| cell.value }
    puts row[4]
    num_rows += 1
  end
  puts "Read #{num_rows} rows" 
end