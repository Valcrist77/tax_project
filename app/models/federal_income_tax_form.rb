class FederalIncomeTaxForm < ActiveRecord::Base
  attr_encrypted :ssn, key: Rails.application.secrets.attr_encrypted_key
  attr_encrypted :spouse_ssn, key: Rails.application.secrets.attr_encrypted_key
end