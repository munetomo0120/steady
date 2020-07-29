# README
# STEADY DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|prefecture|string|null: false|
|image|text||
|email|string|index: true, null: false, unique: true|
|password|string|null: false|
### Association
- has_many :posts
- has_many :likes, through: :user_likes
- has_many :user_likes
- has_many :points

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|index: true, null: false, foreign_key: true|
|image|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :tags, through: :post_tags
- has_many :post_tags
- has_many :likes
- has_one :point
- belongs_to :user

## post_tagsテーブル
|Column|Type|Options|
|------|----|-------|
|post_id|integer|null: false, foreign_key: true|
|tags_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :post
- belongs_to :tag

## tagsテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
### Association
- has_many :posts, through: :post_tags
- has_many :post_tags

## user_likesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|like_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :like

## likesテーブル
|Column|Type|Options|
|------|----|-------|
|post_id|integer|null: false, foreign_key: true|
### Association
- has_many :users, through: :user_likes
- has_many :user_likes
- belongs_to :post

## pointsテーブル
|Column|Type|Options|
|------|----|-------|
|amount|integer|null: false|
|reason|string||
|user_id|integer|null: false, foreign_key: true|
|post_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :post

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
a