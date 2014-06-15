class CreateCircumstances < ActiveRecord::Migration
  def change
    create_table :circumstances do |t|
      t.string :description
      t.string :icon
    end
  end
end