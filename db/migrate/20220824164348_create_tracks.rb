class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.string :name
      t.string :url
      t.integer :pattern
      t.integer :sequence_id

      t.timestamps
    end
  end
end
