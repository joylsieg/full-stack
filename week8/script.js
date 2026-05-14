// // Simulate a long-running synchronous operation
// function freezeBrowser() {
//     const start = Date.now();
//     while (Date.now() - start < 3000) {
//         // Busy-wait for 3 seconds - BLOCKS EVERYTHING
//     }
//     console.log('Done!');
// }

// console.log('Before');
// freezeBrowser();  // Browser freezes for 3 seconds
// console.log('After');  // Runs only after freezeBrowser finishes


// console.log('Before');

// setTimeout(() => {
//     console.log('Timer finished');
// }, 2000);  // Schedule this to run after 2 seconds

// console.log('After');
// // Output:
// // "Before"
// // "After"
// // "Timer finished"  (appears 2 seconds later)

// console.log('Start');

// setTimeout(() => console.log('Timeout'), 0);  // Even with 0 delay!

// console.log('End');
// // Output: "Start", "End", "Timeout"
// // The timeout callback goes to the queue, waits for the stack to clear

// // Basic callback pattern
// function fetchData(callback) {
//     console.log('Fetching data...');
    
//     setTimeout(() => {
//         const data = { id: 1, name: 'Alice' };
//         callback(data);  // Execute the callback when data is ready
//     }, 2000);
// }

// function handleData(data) {
//     console.log('Data received:', data);
// }

// fetchData(handleData);
// console.log('This runs before the data arrives');

// function fetchUser(userId, onSuccess, onError) {
//     setTimeout(() => {
//         if (userId <= 0) {
//             onError('Invalid user ID');
//         } else {
//             onSuccess({ id: userId, name: 'Alice' });
//         }
//     }, 1000);
// }

// fetchUser(
//     1,
//     (user) => console.log('Success:', user),
//     (error) => console.error('Error:', error)
// );


// // The Pyramid of Doom ☠️
// fetchUser(1, (user) => {
//     console.log('Got user:', user);
    
//     fetchPosts(user.id, (posts) => {
//         console.log('Got posts:', posts);
        
//         fetchComments(posts[0].id, (comments) => {
//             console.log('Got comments:', comments);
            
//             fetchLikes(comments[0].id, (likes) => {
//                 console.log('Got likes:', likes);
//                 // ... and deeper and deeper
//             }, handleError);
//         }, handleError);
//     }, handleError);
// }, handleError);

// const promise = new Promise((resolve, reject) => {
//     // Async operation goes here
//     const success = true;
    
//     setTimeout(() => {
//         if (success) {
//             resolve('The operation succeeded!');
//         } else {
//             reject(new Error('The operation failed!'));
//         }
//     }, 2000);
// });

// console.log(promise);  // Promise { <pending> }


// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = { id: 1, name: 'Alice' };
//         resolve(data);
//         // reject(new Error('Network error'));
//     }, 2000);
// });

// fetchData
//     .then((data) => {
//         console.log('Success:', data);
//         return data.id;  // Value passes to next .then()
//     })
//     .then((id) => {
//         console.log('User ID:', id);
//         // You can return another Promise here for chaining
//     })
//     .catch((error) => {
//         console.error('Error:', error.message);
//     })
//     .finally(() => {
//         console.log('Operation complete (success or failure)');
//     });


// function fetchUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve({ id, name: 'Alice' }), 1000);
//     });
// }

// function fetchPosts(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(['Post 1', 'Post 2', 'Post 3']), 1000);
//     });
// }

// function fetchComments(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(['Comment A', 'Comment B']), 1000);
//     });
// }

// // Clean, flat chain instead of nested callbacks
// fetchUser(1)
//     .then(user => {
//         console.log('User:', user);
//         return fetchPosts(user);
//     })
//     .then(posts => {
//         console.log('Posts:', posts);
//         return fetchComments(posts[0]);
//     })
//     .then(comments => {
//         console.log('Comments:', comments);
//     })
//     .catch(error => {
//         console.error('Error at any step:', error);
//         // One .catch() handles errors from ALL steps
//     });

// // Promise.resolve() - Create an already-resolved promise
// const resolved = Promise.resolve('Already done');
// resolved.then(value => console.log(value));  // 'Already done'

// // Promise.reject() - Create an already-rejected promise
// const rejected = Promise.reject(new Error('Failed'));
// rejected.catch(err => console.error(err));

// // Promise.all() - Wait for ALL promises to resolve
// const promise1 = Promise.resolve('One');
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000));
// const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json());

// Promise.all([promise1, promise2, promise3])
//     .then(results => {
//         console.log('All done:', results);
//         // ['One', 'Two', {userId: 1, id: 1, title: '...', completed: false}]
//     })
//     .catch(error => {
//         // If ANY promise rejects, the entire Promise.all rejects
//         console.error('At least one failed:', error);
//     });

// // Promise.allSettled() - Wait for all to complete (success OR failure)
// Promise.allSettled([promise1, Promise.reject('Oops'), promise3])
//     .then(results => {
//         console.log(results);
//         // [
//         //   { status: 'fulfilled', value: 'One' },
//         //   { status: 'rejected', reason: 'Oops' },
//         //   { status: 'fulfilled', value: {...} }
//         // ]
//     });

// // Promise.race() - Resolve/reject with the FIRST to settle
// const fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 500));
// const slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000));

// Promise.race([fast, slow])
//     .then(winner => console.log('Winner:', winner));  // 'Fast'

// // Promise.any() - Resolve with the FIRST to FULFILL (ignores rejections)
// Promise.any([Promise.reject('Fail 1'), fast, slow])
//     .then(result => console.log('First success:', result));  // 'Fast'

// // Async function always returns a Promise
// async function fetchData() {
//     return 'Hello';  // Automatically wrapped in Promise.resolve()
// }

// fetchData().then(value => console.log(value));  // 'Hello'

// // Await pauses execution until the Promise resolves
// async function getUser() {
//     console.log('Fetching...');
    
//     const user = await fetchUser(1);  // Pauses here, doesn't block the event loop
//     console.log('Got user:', user);
    
//     const posts = await fetchPosts(user);
//     console.log('Got posts:', posts);
    
//     return { user, posts };
// }

// getUser().then(result => console.log('Final result:', result));


// async function loadDashboard() {
//     try {
//         console.log('Loading dashboard...');
        
//         const user = await fetchUser(1);
//         const posts = await fetchPosts(user);
//         const notifications = await fetchNotifications(user.id);
        
//         return { user, posts, notifications };
        
//     } catch (error) {
//         console.error('Dashboard load failed:', error.message);
//         // Return a fallback or re-throw
//         return { error: 'Failed to load dashboard' };
//         // throw error;  // Re-throw to let caller handle it
//     }
// }

// // Async IIFE (Immediately Invoked Function Expression)
// (async () => {
//     const dashboard = await loadDashboard();
//     console.log(dashboard);
// })();


// // Sequential (one after another - slower)
// async function sequential() {
//     const user = await fetchUser(1);    // Wait for this
//     const posts = await fetchPosts();   // Then wait for this
//     const comments = await fetchComments(); // Then wait for this
//     // Total time: sum of all requests
// }

// // Parallel (all at once - faster)
// async function parallel() {
//     const [user, posts, comments] = await Promise.all([
//         fetchUser(1),
//         fetchPosts(),
//         fetchComments()
//     ]);
//     // Total time: slowest request
// }

// // Mixed approach
// async function smart() {
//     const user = await fetchUser(1);  // Need user first
    
//     // Fetch posts and notifications in parallel (both need user.id)
//     const [posts, notifications] = await Promise.all([
//         fetchPosts(user.id),
//         fetchNotifications(user.id)
//     ]);
    
//     return { user, posts, notifications };
// }


// // Simplest possible fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         console.log(response.status);  // 200
//         console.log(response.ok);      // true
//         return response.json();        // Parse JSON body (also returns a Promise!)
//     })
//     .then(data => {
//         console.log(data);
//         // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//     });

// // With async/await
// async function getTodo() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
//         // Always check response.ok
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Failed to fetch todo:', error);
//     }
// }


// const response = await fetch('https://api.example.com/data');

// // Status
// console.log(response.status);        // 200, 404, 500, etc.
// console.log(response.statusText);    // 'OK', 'Not Found', etc.
// console.log(response.ok);            // true if status 200-299
// console.log(response.redirected);    // true if redirected

// // Headers
// console.log(response.headers.get('content-type'));
// response.headers.forEach((value, key) => console.log(key, value));

// // Parsing body (these return Promises!)
// const json = await response.json();   // Parse as JSON
// const text = await response.text();   // Parse as plain text
// const blob = await response.blob();   // Parse as binary (images, files)
// const formData = await response.formData(); // Parse as FormData


// // POST - Create new resource
// async function createPost(title, body, userId = 1) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: userId
//         })
//     });
    
//     const data = await response.json();
//     console.log('Created:', data);
//     return data;
// }

// // PUT - Replace entire resource
// async function updatePost(id, title, body) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id, title, body, userId: 1 })
//     });
    
//     return response.json();
// }

// // PATCH - Partial update
// async function patchPostTitle(id, title) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title })
//     });
    
//     return response.json();
// }

// // DELETE - Remove resource
// async function deletePost(id) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE'
//     });
    
//     return response.ok;  // true if successful
// }


// // API Key in header
// const response = await fetch('https://api.example.com/data', {
//     headers: {
//         'X-API-Key': 'your-api-key-here',
//         'Accept': 'application/json'
//     }
// });

// // Bearer Token (JWT)
// const response1 = await fetch('https://api.example.com/protected', {
//     headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
//         'Content-Type': 'application/json'
//     }
// });

// ⚠️ fetch() only rejects on NETWORK errors, not HTTP errors!
// A 404 or 500 response is still a successful fetch()

// async function robustFetch(url) {
//     try {
//         const response = await fetch(url);
        
//         // Check for HTTP errors
//         if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//         }
        
//         const data = await response.json();
//         return { success: true, data };
        
//     } catch (error) {
//         // Network errors AND HTTP errors both caught here
//         return { 
//             success: false, 
//             error: error.message,
//             data: null 
//         };
//     }
// }

// const result = await robustFetch('https://httpstat.us/404');
// if (result.success) {
//     console.log(result.data);
// } else {
//     console.error('Request failed:', result.error);
// }


// // api-client.js - Reusable API client

// const apiClient = {
//     baseURL: 'https://jsonplaceholder.typicode.com',
    
//     async request(endpoint, options = {}) {
//         const url = `${this.baseURL}${endpoint}`;
        
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 ...options.headers
//             },
//             ...options
//         };
        
//         // Convert body objects to JSON
//         if (config.body && typeof config.body === 'object') {
//             config.body = JSON.stringify(config.body);
//         }
        
//         try {
//             const response = await fetch(url, config);
            
//             if (!response.ok) {
//                 const errorBody = await response.text();
//                 throw new Error(
//                     `HTTP ${response.status}: ${response.statusText}. ${errorBody}`
//                 );
//             }
            
//             // Handle empty responses (204 No Content)
//             if (response.status === 204) {
//                 return null;
//             }
            
//             return await response.json();
            
//         } catch (error) {
//             console.error(`API Error [${options.method || 'GET'} ${endpoint}]:`, error);
//             throw error;  // Re-throw for caller to handle
//         }
//     },
    
//     get(endpoint, params = {}) {
//         const queryString = new URLSearchParams(params).toString();
//         const url = queryString ? `${endpoint}?${queryString}` : endpoint;
//         return this.request(url);
//     },
    
//     post(endpoint, body) {
//         return this.request(endpoint, {
//             method: 'POST',
//             body: body
//         });
//     },
    
//     put(endpoint, body) {
//         return this.request(endpoint, {
//             method: 'PUT',
//             body: body
//         });
//     },
    
//     patch(endpoint, body) {
//         return this.request(endpoint, {
//             method: 'PATCH',
//             body: body
//         });
//     },
    
//     delete(endpoint) {
//         return this.request(endpoint, {
//             method: 'DELETE'
//         });
//     }
// };

// // Usage
// async function loadApp() {
//     try {
//         // GET request
//         const posts = await apiClient.get('/posts', { userId: 1 });
//         console.log('Posts:', posts);
        
//         // POST request
//         const newPost = await apiClient.post('/posts', {
//             title: 'My New Post',
//             body: 'This is the content',
//             userId: 1
//         });
//         console.log('Created:', newPost);
        
//         // PATCH request
//         const updated = await apiClient.patch(`/posts/${newPost.id}`, {
//             title: 'Updated Title'
//         });
//         console.log('Updated:', updated);
        
//         // DELETE request
//         const deleted = await apiClient.delete(`/posts/${newPost.id}`);
//         console.log('Deleted successfully');
        
//     } catch (error) {
//         console.error('App failed:', error.message);
//     }
// }