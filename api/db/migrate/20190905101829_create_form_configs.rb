class CreateFormConfigs < ActiveRecord::Migration[5.2]
  def change
    create_table :form_configs do |t|
      t.jsonb :config

      t.timestamps
    end
  end
end
