class FormConfigsController < ApplicationController
  def show
    render json: { form_config: FormConfig.find(params[:id]) }
  end

  def update
    form_config = FormConfig.find(params[:id])
    if form_config.update(form_config_params)
      render json: { form_config: form_config }
    else
      render json: { errors: form_config.errors }
    end
  end

  private

  def form_config_params
    params.require(:form_config).permit!
  end
end
