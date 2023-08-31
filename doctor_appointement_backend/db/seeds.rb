# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

doc = Doctor.new(name: 'Dr. Marry djan', speciality: 'Dentist', description: 'Dr. John Doe is a Dentist in e is tent.', experience: 10, fees: 100)
doc.image.attach(io: File.open('app/doc1.png'), filename: 'doc1.png')
doc.save