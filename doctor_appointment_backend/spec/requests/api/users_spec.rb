require 'swagger_helper'

describe 'User API' do
  path 'api/v1/users' do
    post 'Create User' do
      tags 'Users'
      consumes 'application/json', 'application/xml'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          email: { type: :string },
          password: { type: :string }
        },
        required: %w[name email password]
      }
      response '201', 'user created' do
        let(:user) { { name: 'John', email: 'john@example.com', password: '123456' } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:user) { { name: 'John' } }
        run_test!
      end
    end
  end

  path 'api/v1/users/{id}' do
    delete 'Delete a user' do
      tags 'Users'
      consumes 'application/json', 'application/xml'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'User deleted' do
        let(:id) { create(:user).id }

        run_test!
      end
    end
  end

  path 'api/v1/users/{id}' do
    get 'Retrieves all users' do
      tags 'Users'
      produces 'application/json', 'application/xml'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          email: { type: :string },
          password: { type: :string }
        },
        required: %w[name email password]
      }
      response '200', 'user found' do
        let(:user) { { name: 'John', email: 'john@example.com', password: '123456' } }
        let(:user) { { name: 'Joe', email: 'joe@example.com', password: '123456' } }
        let(:user) { { name: 'Jack', email: 'jack@example.com', password: '123456' } }
        run_test!
      end
    end
  end

  path 'api/v1/show/{id}' do
    get 'Retrieves a user' do
      tags 'Users'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'user found' do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 name: { type: :string },
                 password: { type: :string }
               },
               required: %w[id name password]

        let(:id) { User.create(name: 'John', password: '123456').id }
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
