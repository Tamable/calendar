class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description
      t.datetime :start
      t.datetime :end
      t.integer :user_id
      t.timestamps
    end

    add_index :events, :user_id
  end
end
