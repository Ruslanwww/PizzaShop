class AddProducts < ActiveRecord::Migration[5.2]
  def change
  	Product.create(
  		:title => 'Pastabella', 
  		:description => 'This is good pizza!', 
  		:price => 75,
  		:size => 30,
  		:is_spicy => false,
  		:is_veg => false,
  		:is_best_offer => false,
  		:path_to_image => '/images/pastabella.jpg')

  	Product.create(
  		:title => 'Presto', 
  		:description => 'This is dream!', 
  		:price => 95,
  		:size => 35,
  		:is_spicy => false,
  		:is_veg => false,
  		:is_best_offer => false,
  		:path_to_image => '/images/presto.jpg')

  	Product.create(
  		:title => 'Sky', 
  		:description => 'This is beautifull pizza!', 
  		:price => 105,
  		:size => 35,
  		:is_spicy => false,
  		:is_veg => false,
  		:is_best_offer => false,
  		:path_to_image => '/images/sky.jpg')
  end
end
