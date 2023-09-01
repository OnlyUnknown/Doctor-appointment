require 'swagger_helper'

describe 'Doctors API' do
  path 'api/v1/doctors' do
    post 'Create doctors' do
      tags 'Doctors'
      consumes 'application/json', 'application/xml'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          speciality: { type: :string },
          description: { type: :text },
          consultation_fees: { type: :float },
          years_of_experience: { type: :integer }

        },
        required: %w[name speciality description consultation_fees years_of_experience]
      }
      response '201', 'user created' do
        let(:doctor) do
          { name: 'John', speciality: 'Surgeon', description: 'excellent', consultation_fees: 24.00,
            years_of_experience: 10 }
        end
        run_test!
      end

      response '422', 'invalid request' do
        let(:user) { { name: 'John' } }
        run_test!
      end
    end
  end

  path 'api/v1/doctors/{id}' do
    delete 'Delete a doctor' do
      tags 'Doctors'
      consumes 'application/json', 'application/xml'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'User deleted' do
        let(:id) { create(:doctor).id }

        run_test!
      end
    end
  end

  path 'api/v1/doctors' do
    get 'Retrieves all doctors' do
      tags 'Doctors'
      produces 'application/json', 'application/xml'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          speciality: { type: :string },
          description: { type: :text },
          consultation_fees: { type: :float },
          years_of_experience: { type: :integer }
        },
        required: %w[name speciality description consultation_fees years_of_experience]
      }
      response '200', 'user found' do
        let(:doctor) do
          { name: 'John', speciality: 'Surgeon', Description: 'Excellent', consultation_fees: 220,
            years_of_experience: 10 }
        end
        let(:doctor) do
          { name: 'Obed', speciality: 'Radiologist', Description: 'Excellent', consultation_fees: 250,
            years_of_experience: 15 }
        end
        let(:doctor) do
          { name: 'Julius', speciality: 'Dentist', Description: 'Excellent', consultation_fees: 210,
            years_of_experience: 8 }
        end
        run_test!
      end
    end
  end

  path 'api/v1/doctors/{id}' do
    get 'Retrieves a doctor' do
      tags 'Doctors'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'doctor found' do
        schema type: :object,
               properties: {
                 name: { type: :string },
                 speciality: { type: :string },
                 description: { type: :text },
                 consultation_fees: { type: :float },
                 years_of_experience: { type: :integer }
               },
               required: %w[name speciality description consultation_fees years_of_experience]

        let(:id) do
          Doctor.create(name: 'John', speciality: 'Surgeon', Description: 'Excellent', consultation_fees: 220,
                        years_of_experience: 10)
        end
        run_test!
      end

      response '404', 'not found' do
        let(:id) { 'invalid' }
        run_test!
      end

      response '406', 'unsupported accept header' do
        let(:Accept) { 'application/foo' }
        run_test!
      end
    end
  end
end
