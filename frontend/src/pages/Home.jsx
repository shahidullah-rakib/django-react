function Home() {
  return (
    <div>
      <div>
        <h2>Notes</h2>
      </div>
      <h2>Create a Note</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" id="title" name="title" required />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea id="content" name="content" required></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Home;
