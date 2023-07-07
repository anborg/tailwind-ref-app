Video: https://www.youtube.com/watch?v=00gyCtIQp8E


## setup 
```sh
#create pakckage.json
npm init -y

npm install tailwindcss
# Read doc
# tailwindcss.org

touch src/style.css
touch public/index.html

npm run build:tailwinds

#plugins
# LiveServer 
# Html Css Support

# create minimal tailwind.config.js
npx tailwindcss init

# make "container" center in tailwing.center:true in config.js
# rerun npm run build:tailwinds

# container padding

# container- screens{}

# container - fontFamily

# extend a color pallete and use
# h1 text-bookmark-purple

#container flex item-start py-4 mt-4
#- px, py... p... mx.. my-3 , mt

# breakpoint-media-query
sm:mt-12

# ul hidden on small screen
flex-1 - expand max possible
gap-12 - 3rem space between each of flexitem
uppercase - obvious

# cursor pointer
- cursor-pointer
#Login button
bg-bookmark-red text-white rounded-md px-7 py-3 uppercase

#show hamburguer [while menu is hidden].  Use font-awsom
flex sm:hidden # small (not mobile) hide
flex-1 justify-end #put hamburger on right side
i class="text-2xl" #font size big so it looks proportional
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
        <div class="flex sm:hidden flex-1 justify-end">
          <i class="text-2xl fas fa-bars"></i>
        </div>

# hero section
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-ceter gap-12 mt-14 lt:mt-28"
    container flex 
    flex-col-reverse #default is row, on mobile we want it to stack, CONTENTthenImage, in mobile ImagethenContent reverse 
    lg:flex-row # on large screen flex row 
    items-ceter 
    gap-12 # gap between children
     mt-14 # top margin 
     lt:mt-28 

    # Hero content
    flex flex-1 flex-col items-center lg:items-start #on large screen do not center
    h2: text-bookmark-blue 
    text-3xl md:text-4 lg:text-5xl # different text size 
    text-center lg:text-left # different text align 
    mb-6 # margin bottom for paragraph that comes below

    P:

    DIV for buttons
    div class="flex justify-center flex-wrap gap-6"

    # Majority buttons - in style.css
    create btn{} btn-purple{} btn-white in common styleheet and use 
    button class="btn btn-purple">Get it on Chrome<>
    #hover on button
    
```