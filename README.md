Notes:

This is from the tutorial found here
http://alexpotrykus.com/blog/2013/12/07/angularjs-with-rails-4-part-1/

Interesting to note:

- Angular won't load without these in the application.html.erb file:
 <%= stylesheet_link_tag    "application", media: "all", "data-turbolinks-track" => true %>
  <%= javascript_include_tag "application", "data-turbolinks-track" => true %>

- also needed to run bundle install & bundle update to get Angular to load

- 'Can't verify CSRF token authenticity' error in Rails 4, you need to add this to application controller:

 def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected
    def verified_request?
      super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
    end