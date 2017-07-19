###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compressed
end

###
# Page options, layouts, aliases and proxies
###

page "/*", :layout => "layout/_layout"
page "/index.html", :layout => "layout/_home"
page "/portfolio/*", :layout => "layout/_portfolio"
page "/404.html", :layout => "layout/_legacy"
page "/resume.html", :layout => "layout/_legacy"
page "/map.html", :layout => "layout/_legacy"
page "/feed.xml", :layout => false

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Blog settings
###

# Time.zone = "UTC"

activate :blog do |blog|
  # blog.prefix = "blog"
  # blog.permalink = ":year/:month/:day/:title.html"
  # blog.sources = ":year-:month-:day-:title.html"
  # blog.taglink = "tags/:tag.html"
  # blog.layout = "layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 100
  # blog.year_link = ":year.html"
  # blog.month_link = ":year/:month.html"
  # blog.day_link = ":year/:month/:day.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # blog.paginate = true
  blog.per_page = 20
  # blog.page_link = "page/:num"
end

###
# Compass
###

require 'compass'
require 'modular-scale'

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Minify html
  activate :minify_html

  # Enable cache buster
  # activate :asset_hash

  # gzip
  activate :gzip

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
