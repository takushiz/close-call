class Post < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :genre

  validates :name, :title, :content, presence: true

  validates :genre_id, numericality: {other_than: 1, message: "can't be blank"}

end
