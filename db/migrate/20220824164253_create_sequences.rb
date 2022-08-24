class CreateSequences < ActiveRecord::Migration[7.0]
  def change
    create_table :sequences do |t|
      t.string :title
      t.integer :plays
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
