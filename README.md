# Nuxt Example

Live Demo: https://nuxt-test-git-main-drafter500s-projects.vercel.app/

### Run locally:
```
  npm i
  npm run dev
```


### End-to-end test:
```
  npm run test-ui
```

### End-to-end test headless:
```
  npm run test
```

## Notes:

- Instead of using a modal to edit and create posts I used a dedicated page. Blog posts are usually
big and user would spend extensive time creating and editing it. Also, the now blog post gets a
dedicated url which can be saved in browser bookmarks or shared with other people.
Modals would be better for some quick editing of multiple smaller items, where switching focus
by going back and forth between pages is undesirable.
- Normally CRUD endpoints require authentication, therefore the session management
(through http-only cookies) would be necessary, here it is omitted.
- I did not handle error cases assuming api always works.
- I'm not a big fan of tailwindCSS, I used it several years ago, but decided to give it another try
and play with it more.
- I tried to find a nice ready to go UI library with tailwind and stumbled upon `daisy UI`. I'm
honestly not impressed by the look of it, but it does the job and is simple.
- I usually write unit tests for all the code, so would add them too with more time
- Would like to also add github actions with tests, linting, type-checking
- The listing page would be normally supported by pagination or infinite scrolling. Now it just
shows the first 100 items.
