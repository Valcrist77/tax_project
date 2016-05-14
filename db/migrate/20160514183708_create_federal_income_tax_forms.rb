class CreateFederalIncomeTaxForms < ActiveRecord::Migration
  def change
    create_table :federal_income_tax_forms do |t|
      # Basic Info
      t.string :first_name
      t.string :middle_initial
      t.string :last_name
      t.string :encrypted_ssn
      t.string :encrypted_ssn_iv
      # Basic Spouse Info
      t.string :spouse_first_name
      t.string :spouse_middle_initial
      t.string :spouse_last_name
      t.string :spouse_encrypted_ssn
      t.string :spouse_encrypted_ssn_iv
      # Address
      t.string :home_address
      t.string :apartment_number
      t.string :city
      t.string :state 
      t.string :zip_code
      # Income
      t.float :wages
      t.float :taxable_interest
      t.float :unemployment_compensation
      t.boolean :claimed_as_dependent
      t.boolean :spouse_claimed_as_dependent
      # Payments, Credits, and Tax
      t.float :federal_income_tax_withheld
      t.float :earned_income_credit
      t.boolean :full_year_coverage
      t.float :health_care_individual_responsibility
      # Bank Information
      t.string :account_type
      t.string :routing_number
      t.string :account_number

      t.timestamps
    end
  end
end
