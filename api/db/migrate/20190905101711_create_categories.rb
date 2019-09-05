class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title
      t.string :icon
      t.integer :reward_points
      t.integer :form_config_id

      t.timestamps
    end
  end
end
