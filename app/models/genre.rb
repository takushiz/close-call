class Genre < ActiveHash::Base
  self.data = [
    {id: 1, name: "---"},
    {id: 2, name: "製作中"},
    {id: 3, name: "チェック中"},
    {id: 4, name: "梱包中"},
    {id: 5, name: "準備中"},
    {id: 6, name: "施工中"},
    {id: 7, name: "その他"},
  ]

  include ActiveHash::Associations
  has_many :posts

end
