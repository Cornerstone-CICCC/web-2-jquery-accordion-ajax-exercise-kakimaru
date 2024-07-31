$(function () {
  // Exercise 1

  const accordionHeader = $(".accordion-header");

  accordionHeader.on("click", function () {
    const curContent = $(this).next('.accordion-content')
    if (curContent.is(":visible")) {
      curContent.slideUp();
    } else  {
      $('.accordion-content').slideUp();
      curContent.slideDown();
    }
  });

  // Exercise 2

  const button = $(".todos").find("button");

  function getData() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://dummyjson.com/todos`,
        type: `GET`,
        success: function (response) {
          resolve(response);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }

  button.on("click", async function () {
    const data = await getData();
    console.log(data);

    const { todos } = data;
    console.log(todos);
    $(this)
      .next()
      .after()
      .html(todos.map((todo) => `<li>${todo.todo}</li>`));
  });
});
