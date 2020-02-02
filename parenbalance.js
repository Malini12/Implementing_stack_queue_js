function mystack(a) {
  var stack = [];
  str = a;
  var flag = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
      if (stack.length > 0) {
        stack.pop(str[i]);
      } else {
        flag = 1;
      }
    }
  }
  if (flag == 0 && stack.length == 0) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}
mystack("[[()]]");
mystack("([()");
