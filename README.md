# **All Posts Blog Application**

This project is a modern **blog listing** application built with React.js that consumes an external news API. The application allows users to search for blogs, filter by categories, and paginate through the results. It is designed with a responsive layout using Tailwind CSS and features client-side routing via React Router.

## **Features**

- **Blog Listing:** Displays a list of blog posts fetched from the News API.
- **Search Functionality:** Users can search for blogs by keywords.
- **Category Filter:** Dropdown for selecting specific news categories (e.g., business, sports, entertainment).
- **Pagination:** Users can navigate through the results with pagination.
- **Responsive Design:** Fully responsive layout using Tailwind CSS, ensuring a great experience on all devices.
- **Debounced Search:** Search functionality uses a debounced mechanism to reduce unnecessary API calls.
- **Image Fallback:** If a blog post doesn’t have an image, a default image is displayed.
- **Error Handling:** Displays user-friendly messages for loading errors and no results found.
  
## **Tech Stack**

### **Frontend:**
- **React.js**: For building UI components.
- **React Router**: For managing client-side routing and navigation between pages.
- **React Paginate**: To enable pagination for the blog listing.
- **Tailwind CSS**: For responsive design and utility-first CSS styling.
  
### **API Integration:**
- **Axios**: Used to handle API requests and fetch blogs from the **News API**.
- **News API**: External API used to fetch news articles based on search queries, categories, and pagination.

### **Additional Libraries:**
- **Debounce Mechanism**: Implemented to delay the search query execution for improved performance and reduce unnecessary API requests.

## **Project Structure**

Here is an overview of the project structure:

/src ├── /api │ └── api.js # Fetching API logic separated from UI ├── /components │ ├── BLogsComp.js # Blog component to display blog articles │ └── AllPostsPage.js # Main component for displaying all posts ├── /assets │ └── blogImg.png # Default image used if an article has no image ├── /util │ ├── Heading.js # Component for page headings │ └── SubTitle.js # Component for subtitles └── index.js # Entry point of the React application




## **Installation Instructions**

To run this project locally, follow these steps:

1. ## **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/all-posts-blog-app.git



## **Navigate to the Project Directory:**

cd all-posts-blog-app


## **Install Dependencies:**

npm install



## **Environment Setup:**

You’ll need an API key from NewsAPI.org. After obtaining the API key, create a .env file in the root directory and add your API key like this:

VITE_API_KEY=your_newsapi_key_here


## **Run the Application:**

Start the development server:

npm run dev


The app should now be running at http://localhost:5173.


## **Usage**


Once the application is running, you can:

Search for blogs using the search input.

Filter blogs by categories using the dropdown.

Paginate through the results using the navigation controls at the bottom of the page.

Click on any blog post to view further details.



## **Code Explanation**


The BLogsComp component is responsible for fetching and rendering the list of blogs. It uses Axios to make API requests and handles pagination, search, and category filtering. Here's a quick breakdown of the component:

Props:

size: Determines the number of articles to fetch per page.

q: The search query entered by the user.

currentPage: The current page for pagination.

category: The selected news category.

Debouncing: The search input is debounced to prevent excessive API calls. This is implemented using setTimeout in the useEffect hook.


Error Handling: If no results are found, or an error occurs during the API request, an appropriate message is displayed to the user.



## **AllPostsPage Component**

AllPostsPage serves as the main container for rendering the heading, search bar, category dropdown, and blog list.

React Paginate: Pagination is handled by ReactPaginate, which triggers a function on each page change to update the current page.

Category Dropdown: The dropdown allows users to filter blogs by different categories like Business, Entertainment, Sports, etc.







## **Future Improvements**

Improved UI/UX: Add animations and improve UI components for better user experience.

Blog Detail Page: Create a detailed page for individual blog posts.

State Management: Integrate a global state management solution like Redux to handle the application's state more effectively as it scales.

Unit Tests: Add unit and integration tests to ensure code quality and reliability.

## **Contributing**

Contributions are welcome! If you would like to contribute to this project:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes and commit them (git commit -m 'Add some feature').

Push to the branch (git push origin feature/your-feature-name).

Open a Pull Request.



## **License**

This project is licensed under the MIT License.



## **screenshoots**

![screencapture-localhost-5173-2024-10-07-11_14_55](https://github.com/user-attachments/assets/c1aaa12f-25d3-45d6-9046-26eff4e755d5)




![screencapture-localhost-5173-2024-10-07-11_15_35](https://github.com/user-attachments/assets/c293e917-3df7-4463-a2f6-8afe29efbcd4)



![screencapture-localhost-5173-all-blogs-2024-10-07-11_16_01](https://github.com/user-attachments/assets/e32622b5-9770-42e0-9bd8-edeb6dc35397)



![screencapture-localhost-5173-all-blogs-2024-10-07-11_17_22](https://github.com/user-attachments/assets/bd4757ce-f326-4b2d-8c81-aa70c966fb1f)

![screencapture-localhost-5173-all-blogs-2024-10-07-11_18_14](https://github.com/user-attachments/assets/19eb48b1-f21b-4527-8622-7a077015e0bb)


![screencapture-localhost-5173-blog-2024-10-07-11_19_15](https://github.com/user-attachments/assets/ea34b156-2fa5-4906-8851-41655f680bfe)


![screencapture-localhost-5173-all-blogs-2024-10-07-11_26_28](https://github.com/user-attachments/assets/2ad1c1b7-f7fa-46c9-82bc-e87b992bf2e7)
