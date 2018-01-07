class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :author_id, null: false
      t.integer :album_id

      t.timestamps
    end

    add_attachment :tracks, :image
    add_attachment :tracks, :track_url
  end
end
