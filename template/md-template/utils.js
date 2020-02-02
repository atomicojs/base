let getValueToOrder = ({ base, meta: { order, title } }) =>
  order == 0 ? order : order || title || base;

export let toGroups = (files, rootGroup) =>
  [
    ...files.reduce((groups, file) => {
      let { group = rootGroup } = file.meta;
      let items = groups.get(group) || [];
      groups.set(group, [...items, file]);
      return groups;
    }, new Map([[rootGroup, []]]))
  ]
    .sort(([name], [nextName]) => (name > nextName ? 1 : -1))

    .map(([name, items]) => [
      name,
      items.sort((prev, next) =>
        getValueToOrder(prev) > getValueToOrder(next) ? 1 : -1
      )
    ]);

export let html = (strings, ...values) =>
  strings
    .map(
      (string, index) =>
        string +
        (Array.isArray(values[index])
          ? values[index].join("")
          : values[index] || "")
    )
    .join("");

export let css = html;
