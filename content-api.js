const pages = {
  tyler: {
    handle: "tyler",
    title: "Tyler",
    description: "I like apples!",
  },
  jason: {
    handle: "jason",
    title: "Jason",
    description: "I like oranges!",
  },
  aaron: {
    handle: "aaron",
    title: "Aaron",
    description: "I like grapes!",
  },
};

export async function getPages() {
  return Object.values(pages);
}

export async function getPage(handle) {
  return pages[handle];
}

export async function get404() {
  return {
    handle: "404",
    title: "Page Not Found",
    description: "Oops, can't find what you're looking for",
  };
}
