export default function(child, parent) {
  var proto = (child.prototype = Object.create(parent.prototype));
  Object.defineProperty(proto, 'constructor', {
    value: child,
    writable: true,
    enumerable: true,
    configurable: true
  });
  return proto;
}
