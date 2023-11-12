function sumRepeatedCategory(data) {
  return data.reduce((acc, category) => {
    let label = category.label;

    let previous = acc.find(item => item.label === label);
    let previousIndex = acc.indexOf(previous);

    if (previousIndex >= 0) {
      acc[previousIndex].percentage += category.percentage;
    } else {
      acc.push(category);
    }
    return acc;
  }, []);
}

export default sumRepeatedCategory;
