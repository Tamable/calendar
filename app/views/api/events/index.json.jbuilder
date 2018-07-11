json.events do
  @events.each do |event|
    json.set! event.id do
      json.partial! 'api/events/event', event: event
    end
  end
end

json.users do
  @events.map(&:user).each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
