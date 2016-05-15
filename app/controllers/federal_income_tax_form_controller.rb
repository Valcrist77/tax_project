class FederalIncomeTaxFormController < ApplicationController
  def create
    respond_with FederalIncomeTaxForm.create(basic_info_params)
  end

  private
    def basic_info_params
      params.require(:federal_income_tax_form)
            .permit(:first_name, :middle_initial, :last_name, :ssn,
                    :home_address, :apartment_number, :city ,:state, :zip_code)
    end
  end
end