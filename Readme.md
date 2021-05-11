## Description

This is an app to keep a record from each employee working hours, as well as the off days.  The app helps the user to track its worked hour, extra worked hours and the vacations days.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anon I can sign up in the application so that I can start tracking my working hours.
- **Login:** As a user I can login to the application so that I can check, add, update and delete my working hours and off days.
- **Logout:** As a user I can logout from the application so no one else can use it. 
- **Create New Journeys:** As a user I can create a journey record.    
- **Update Journey:** As a user I can update a journey record. 
- **Delete Journey:** As a user I can delete a journey record. 
- **View Journeys** As a user I can read all journey records. 
- **Create New Off Days:** As a user I can create an off day.    
- **Update Off Day:** As a user I can update an off day. 
- **Delete Off Day:** As a user I can delete an off day 
- **View Off Day:** As a user I can read all off days. 
- **View Profile:** As a user I can read my profile.
- **Edit Profile:** As a user I can update my profile. 

## Backlog

- User and Manager Role
- Todo Model + Functionalities
- Accept / Reject Off Days Requests 
- NodeMailer on: SignUp
- Start Hooks Implementation
- Async & Await
- Extra Hours: choose between Off Day or Remuneration
- Graphic representation of weekly / monthly / anually worked hours

# Client / Frontend

## React Router Routes (React App)

| Path                 | Component         | Permissions                | Behavior                                                     |
| -------------------- | ----------------- | -------------------------- | ------------------------------------------------------------ |
| `/`                  | HomePage          | public `<Route>`           | Home page                                                    |
| `/signup`            | SignupPage        | anon only `<AnonRoute>`    | Signup form, link to login, link to social login, navigate to profilepage after signup |
| `/login`             | LoginPage         | anon only `<AnonRoute>`    | Login form, link to signup, link to social login, navigate to profilepage after login |
| `/journeys`          | JourneyListPage   | user only `<PrivateRoute>` | Shows all journeys in a list                                 |
| `/journeys/add`      | JourneyListPage   | user only `<PrivateRoute>` | Create a new journey                                         |
| `/journeys/:id`      | JourneyDetailPage | user only `<PrivateRoute>` | Details of a journey                                         |
| `/journeys/edit/:id` | JourneyEditlPage  | user only `<PrivateRoute>` | Update a journey                                             |
| `/journeys/:id`      | n/a               | user only `<PrivateRoute>` | Delete journey                                               |
| `/offdays`           | OffDaysListPage   | user only `<PrivateRoute>` | List of user's off days                                      |
| `/offdays/add`       | OffDaysListPage   | user only `<PrivateRoute>` | Create an off day                                            |
| `/offdays/edit/:id`  | OffDayEditlPage   | user only `<PrivateRoute>` | Update a user's off day                                      |
| `/offdays:id`        | n/a               | user only `<PrivateRoute>` | Delete off days                                              |
| `/profile`           | ProfilePage       | user only `<PrivateRoute>` | View user profile with journeys and off days                 |
| /profile/edit        | ProfileEditPage   | user only `<PrivateRoute>` | Update user profile                                          |

## Components

- HomePage
- SignupPage
- LoginPage
- JourneyListPage
- JourneyDetailPage
- JourneyEditPage
- OffDaysListPage
- OffDaysEditPage
- ProfilePage
- ProfileEditPage
- Navbar
- Footer
- JourneyItem
- OffDaysItem
- LogInForm
- SignUpForm
- JourneyEditForm
- OffDaysEditForm
- ProfileEditForm

## Services

- Auth Service
  - login(user)
  - signup(user)
  - logout()
  - isLoggedIn()
  - edit(data)
- Journeys Service
  - getAll()
  - getOne(id)
  - create()
  - update(id)
  - delete(id)
- Off Days Service
  - getAll()
  - create()
  - update(id)
  - delete(id)

# Server / Backend

## Models

User Model

```javascript
{
first_name: {type: String, required: true}
last_name: {type: String, required: true}
email: {type: String, required: true, unique: true}
password: {type: String, required: true}
profile_pic: {type: String}
birth_date: {type: Date}
initial_employ_date: {type: Date}
journey_tracker: {type: ObjectId, 'Journey'}
off_days: {type: ObjectId, 'Off-day'}
}
```



Journey Model

```javascript
{
start_hour: {type: Date, required: true}
end_hour: {type: Date}
start_break: {type: Date}
end_break:{type: Date}
morning_standup: {type: String}
evening_standup: {type: String}
employee: {type: ObjectId, 'User', required: true}
}
```



Off-day Model

```javascript
{
  start_day: {type: Date, required: true}
  end_day: {type: Date, required: true}
  type: {type: String, required: true}
  employee: {type: ObjectId, 'User', required: true}
}
```



## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile`        | Saved session                                                | 200            | 404          | Check if user is logged in and return profile page           |
| PUT         | /auth/profile/edit/:id | {first_name, last_name, profile_pic, birth_date, initial_employ_date} | 200            | 400          | Update user profile details                                  |
| POST        | `/auth/signup`         | {first_name, last_name,  email, password}                    | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {email, password}                                            | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| GET         | `/journeys`            |                                                              | 200            | 400          | Show all user's journeys                                     |
| GET         | `/journeys/:id`        | {id}                                                         | 200            | 400          | Show specific journey                                        |
| POST        | `/journeys`            | {}                                                           | 201            | 400          | Create and save a new journey                                |
| PUT         | `/journeys/:id`        | {start_hour, end_hour, start_break, end_break, morning_standup, evening_standup} | 200            | 400          | Update journey                                               |
| DELETE      | `/journeys/:id`        | {id}                                                         | 201            | 400          | Delete journey                                               |
| GET         | `/offdays`             |                                                              | 200            | 400          | Show off days                                                |
| GET         | `/offdays/:id`         | {id}                                                         | 200            | 400          | Show specific off day                                        |
| POST        | `/offdays`             | {start_day, end_day, type}                                   | 201            | 400          | Create off day                                               |
| PUT         | `/offdays/:id`         | {start_day, end_day, type}                                   | 200            | 400          | Update off day                                               |
| DELETE      | `/offdays/:id`         | {id}                                                         | 200            | 400          | Delete off day                                               |



## Links

### Trello

https://trello.com/b/fABMSAcP/ironhack-project-3



### GitHub

Client Repository Link:



Server Repository Link:

https://github.com/BeAvisP/M3-Project-Backend



### Heroku Deploy Link



### Slides

