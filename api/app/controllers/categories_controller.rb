class CategoriesController < ApplicationController
  def index
    render json: { categories: Category.all.as_json(include: :form_config) }
  end

  def create
    category = Category.create(category_params)
    form_config = FormConfig.new(config: [], category_id: category.id)
    if form_config.save
      render json: { category: category.as_json(include: :form_config) }
    else
      render json: { errors: category.errors }
    end
  end

  def update
    category = Category.find(params[:id])
    if category.update(category_params)
      render json: { category: category.as_json(include: :form_config) }
    else
      render json: { errors: category.errors }
    end
  end

  private

  def category_params
    params.require(:category).permit!
  end
end
