class CreateSequences < ActiveRecord::Migration[7.0]
  def change
    create_table :sequences do |t|
      t.string :title
      t.integer :plays
      t.string :image
      t.hstore :settings
      t.integer :user_id
      t.string :pattern, array:true, default: []

      t.timestamps
    end
  end
end
