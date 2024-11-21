# playwright-vet-ts
Small set of playwright tests to vetspire

### To run the tests:

- To run the tests we can simply use `npm run test`
### Observations:

- Some of these tests are very small, and some of them had their assertions moved to a single test case just so we could get closer to tests that follow (AAA pattern).
- I am covering some of the mainPage, feature dropdown, pricing page and status page. I couldn't find bigger flows on the landing page, but I am sure that inside the app there's plenty of challenges. 
- We also have a very simple github actions to run the tests that I created on this repository.