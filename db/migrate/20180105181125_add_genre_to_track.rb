class AddGenreToTrack < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :genre, :string
  end
end
