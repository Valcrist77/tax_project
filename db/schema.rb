# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160514183708) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "federal_income_tax_forms", force: :cascade do |t|
    t.string   "first_name"
    t.string   "middle_initial"
    t.string   "last_name"
    t.string   "encrypted_ssn"
    t.string   "encrypted_ssn_iv"
    t.string   "spouse_first_name"
    t.string   "spouse_middle_initial"
    t.string   "spouse_last_name"
    t.string   "spouse_encrypted_ssn"
    t.string   "spouse_encrypted_ssn_iv"
    t.string   "home_address"
    t.string   "apartment_number"
    t.string   "city"
    t.string   "state"
    t.string   "zip_code"
    t.float    "wages"
    t.float    "taxable_interest"
    t.float    "unemployment_compensation"
    t.boolean  "claimed_as_dependent"
    t.boolean  "spouse_claimed_as_dependent"
    t.float    "federal_income_tax_withheld"
    t.float    "earned_income_credit"
    t.boolean  "full_year_coverage"
    t.float    "health_care_individual_responsibility"
    t.string   "account_type"
    t.string   "routing_number"
    t.string   "account_number"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
