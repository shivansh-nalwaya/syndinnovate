class CategoriesController < ApplicationController
  def index
    render json: { categories: Category.all }
  end

  def create
    category = Category.create!(category_params)
    render json: { category: category }
  end

  private

  def category_params
    params.require(:category).permit!
  end
end
