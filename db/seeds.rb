file_path = ""

circumstances = []

File.open(file_path).each do |line|
  circumstance = line.split(',') #assumes the file is a .csv
  circumstance = {description: circumstance[0], icon: circumstance[1]}
  circumstances.push(circumstance)
end

circumstances.each do |circumstance|
  Circumstance.create(circumstance)
end