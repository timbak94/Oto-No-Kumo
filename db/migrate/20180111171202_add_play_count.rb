class AddPlayCount < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :play_count, :integer, default: 0
  end
end
