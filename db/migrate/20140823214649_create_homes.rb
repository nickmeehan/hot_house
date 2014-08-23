class CreateHomes < ActiveRecord::Migration
  def change
    create_table :homes do |t|
      t.string :latitude
      t.string :longitude
      t.belongs_to :builder
      t.string :address
      t.integer :price
      t.integer :bedroom_count
      t.integer :bathroom_count
      t.string :image_url_array, array: true, length: 5

      t.timestamps
    end
  end
end
