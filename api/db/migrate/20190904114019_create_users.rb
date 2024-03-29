class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :contact
      t.string :password_digest
      t.boolean :is_admin, default: false

      t.timestamps
    end
  end
end
