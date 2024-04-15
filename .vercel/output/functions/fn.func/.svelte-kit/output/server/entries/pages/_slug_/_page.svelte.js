import { c as create_ssr_component, v as validate_component, d as each, e as escape, f as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object, b as add_attribute, m as missing_component, j as compute_slots } from "../../../chunks/ssr.js";
import { a as siteUrl, b as siteName } from "../../../chunks/config.js";
import { A as Arrow } from "../../../chunks/arrow.js";
import { twMerge } from "tailwind-merge";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { categories } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  return `<div class="flex items-center py-4 overflow-x-auto whitespace-nowrap"><a href="/recipes" class="text-gray-500" data-svelte-h="svelte-1w2tk4f">Recipes</a> <span class="mx-2 text-gray-500 rtl:-scale-x-100">${validate_component(Arrow, "Arrow").$$render($$result, {}, {}, {})}</span> ${each(categories, (cat) => {
    return `<a href="${"/recipes/" + escape(cat.slug, true)}" class="text-gray-500 hover:underline">${escape(cat.category)}</a> <span class="mx-2 text-gray-500 rtl:-scale-x-100">${validate_component(Arrow, "Arrow").$$render($$result, {}, {}, {})} </span>`;
  })} <span class="text-yellow-500">${escape(title)} <span data-svelte-h="svelte-19abtb3"></span></span></div>`;
});
let n = Date.now();
function generateId() {
  return (++n).toString(36);
}
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fillPercent", "fillColor", "strokeColor", "size", "ariaLabel", "id", "role"]);
  let { fillPercent = 100 } = $$props;
  let { fillColor = "#F5CA14" } = $$props;
  let { strokeColor = "#F5CA14" } = $$props;
  let { size = 24 } = $$props;
  let { ariaLabel = "star" } = $$props;
  let { id = generateId() } = $$props;
  let { role = "img" } = $$props;
  if ($$props.fillPercent === void 0 && $$bindings.fillPercent && fillPercent !== void 0)
    $$bindings.fillPercent(fillPercent);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.strokeColor === void 0 && $$bindings.strokeColor && strokeColor !== void 0)
    $$bindings.strokeColor(strokeColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "100 100 120 120" },
      { role: escape_attribute_value(role) }
    ],
    {}
  )}><defs><linearGradient${add_attribute("id", id, 0)}>${fillPercent !== 100 ? `<stop offset="0%"${add_attribute("stop-color", fillColor, 0)}></stop> <stop offset="${escape(fillPercent, true) + "%"}"${add_attribute("stop-color", fillColor, 0)}></stop> <stop offset="${escape(fillPercent, true) + "%"}" stop-color="transparent"></stop> <stop offset="100%" stop-color="transparent"></stop>` : `<stop offset="0%"${add_attribute("stop-color", fillColor, 0)}></stop> <stop offset="100%"${add_attribute("stop-color", fillColor, 0)}></stop>`}</linearGradient></defs><g fill="${"url(#" + escape(id, true) + ")"}"${add_attribute("stroke", strokeColor, 0)} stroke-width="2"><polygon points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
    203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
    153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
    141.489, 197.361, 165.000, 185.000"></polygon></g></svg> `;
});
const Rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { divClass = "flex items-center" } = $$props;
  let { size = 24 } = $$props;
  let { total = 5 } = $$props;
  let { rating = 4 } = $$props;
  let { partialId = "partialStar" + generateId() } = $$props;
  let { icon = Star } = $$props;
  let { count = false } = $$props;
  const fullStarId = generateId();
  const grayStarId = generateId();
  let fullStars = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars = total - (fullStars + Math.ceil(rateDiffence));
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.partialId === void 0 && $$bindings.partialId && partialId !== void 0)
    $$bindings.partialId(partialId);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}>${count ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { fillPercent: 100, size }, {}, {})} <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">${escape(rating)}</p> ${slots.default ? slots.default({}) : ``}` : `${each(Array(fullStars), (star) => {
    return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size, fillPercent: 100, id: fullStarId }, {}, {})}`;
  })} ${percentRating ? `${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      size,
      fillPercent: percentRating,
      id: partialId
    },
    {},
    {}
  )}` : ``} ${each(Array(grayStars), (star) => {
    return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size, fillPercent: 0, id: grayStarId }, {}, {})}`;
  })} ${$$slots.text ? `${slots.text ? slots.text({}) : ``}` : ``}`}</div> `;
});
const Review = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ratingCount, review_text, review_date, user_name } = $$props;
  const timestamp = new Date(review_date);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(timestamp);
  if ($$props.ratingCount === void 0 && $$bindings.ratingCount && ratingCount !== void 0)
    $$bindings.ratingCount(ratingCount);
  if ($$props.review_text === void 0 && $$bindings.review_text && review_text !== void 0)
    $$bindings.review_text(review_text);
  if ($$props.review_date === void 0 && $$bindings.review_date && review_date !== void 0)
    $$bindings.review_date(review_date);
  if ($$props.user_name === void 0 && $$bindings.user_name && user_name !== void 0)
    $$bindings.user_name(user_name);
  return `<div class="mt-5 pt-5 border-t"><div class="flex items-center w-fit"><img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" alt="dummy_img" class="h-10 rounded-full"> <span class="px-3">${escape(user_name)}</span></div> <div class="py-1 flex">${validate_component(Rating, "Rating").$$render(
    $$result,
    {
      id: "example-3",
      total: 5,
      size: 24,
      rating: ratingCount
    },
    {},
    {}
  )} <span class="px-5 text-sm text-gray-500">${escape(formattedDate)}</span></div> <p class="py-3 px-2">${escape(review_text)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let videoId = "";
  let { count = 1 } = $$props;
  let stars = [1, 2, 3, 4, 5];
  let fillColor = ["gray", "gray", "gray", "gray", "gray"];
  console.log(data.reviews);
  const timestamp = data.post.updated;
  const post_date = new Date(timestamp);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(post_date);
  if (data.post.youtube_url != "") {
    let url = data.post.youtube_url;
    if (url.includes("/shorts/")) {
      videoId = url.split("/shorts/")[1];
    } else {
      videoId = url.match(/[?&]v=([^&]+)/)[1];
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `${$$result.head += `<!-- HEAD_svelte-9ymdyt_START -->${$$result.title = `<title>${escape(data.post.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.post.title, 0)}><meta${add_attribute("content", siteUrl, 0)} property="og:url"><meta property="og:description"${add_attribute("content", data.post.description, 0)}><meta${add_attribute("content", siteName, 0)} property="og:site_name"><meta${add_attribute("content", data.post.title, 0)} name="twitter:title"><meta${add_attribute("content", data.post.description, 0)} name="twitter:description"><!-- HEAD_svelte-9ymdyt_END -->`, ""} <div class="max-w-3xl w-full mx-auto py-10 border-b"><article class="px-5"><div class="">${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      categories: data.categories,
      title: data.post.title
    },
    {},
    {}
  )} <h1 class="text-4xl font-medium capitalize">${escape(data.post.title)}</h1> <div class="py-4"><p class="text-sm">Updated on ${escape(formattedDate)}</p></div></div> <hr> <div class="prose"><!-- HTML_TAG_START -->${data.post.content}<!-- HTML_TAG_END --></div></article> ${videoId != "" ? `<div class="w-full px-5 mt-8 rounded bg-neutral-100"><iframe width="315" height="560" class="mx-auto" src="${"https://www.youtube.com/embed/" + escape(videoId, true)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``}</div> <div class="max-w-5xl mx-auto px-5 py-8"><h2 class="text-center" data-svelte-h="svelte-10dr6y">You May Also Like</h2> <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">${each(data.similar_posts, (post) => {
    return `<a href="${"/" + escape(post.title.toLowerCase().replace(/\s+/g, "-"), true) + "-" + escape(post.id, true)}" class=""><img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="${"https://pramilasrecipes.pockethost.io/api/files/" + escape(post.collectionId, true) + "/" + escape(post.id, true) + "/" + escape(post.featured_image, true)}"${add_attribute("alt", post.title, 0)}> <div class="py-2 hover:none"><span class="uppercase text-sm font-semibold text-gray-700">${escape(post.expand.category.category)}</span> <h2 class="text-xl text-yellow-500 hover:underline">${escape(post.title)}</h2></div> </a>`;
  })}</div></div>  ${data.post.reviews_allowed == true ? `<div class="max-w-3xl mx-auto bg-neutral-100"><div class="p-5 rounded"><div class="w-fit"><h3 data-svelte-h="svelte-mlvmqy">Your Rating</h3> <div class="mt-3">${each(stars, (star, index) => {
    return `<button class="px-1"${add_attribute("this", index, 0)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"${add_attribute("fill", fillColor[index], 0)} stroke="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> </button>`;
  })}</div></div> <div class="py-3 px-1 w-fit"><h3 data-svelte-h="svelte-m03zv5">Your Review</h3> <form class="mt-3" action="?/submitReview" method="post"><input name="rating" type="number"${add_attribute("value", count, 0)} hidden> <input name="post_id" type="text"${add_attribute("value", data.post.id, 0)} hidden> <input name="full_name" type="text" placeholder="Full Name" class="w-full rounded" required> <input name="email" type="email" placeholder="Email" class="mt-3 w-full rounded" required> <textarea name="review" id="" placeholder="Write a review" class="mt-3 w-full rounded" required></textarea> <div class="mx-auto text-center" data-svelte-h="svelte-1xd5qyy"><button type="submit" form_action="?/submitReview" class="rounded border border-black px-3 py-1 my-2 w-full hover:bg-black hover:text-white">Submit</button></div></form></div></div> <hr> <div class="p-5">${data.reviews.totalItems > 0 ? `<h3 data-svelte-h="svelte-bvh3o5">Reviews</h3> ${each(data.reviews.items, (review) => {
    return `${validate_component(Review, "Review").$$render(
      $$result,
      {
        ratingCount: review.rating,
        review_text: review.review_text,
        review_date: review.created,
        user_name: review.expand.userId.full_name
      },
      {},
      {}
    )}`;
  })}` : `<p class="text-center p-5 text-sm" data-svelte-h="svelte-n8xrgb">Be the first one to review.</p>`}</div></div>` : ``}`;
});
export {
  Page as default
};
