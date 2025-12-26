export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'java' | 'javascript';
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'java-oop-basics',
    title: 'Lập trình hướng đối tượng trong Java',
    excerpt: 'Tìm hiểu các khái niệm cơ bản về OOP: Class, Object, Inheritance, Polymorphism, Encapsulation và Abstraction.',
    content: `
# Lập trình hướng đối tượng trong Java

Lập trình hướng đối tượng (OOP) là một paradigm lập trình dựa trên khái niệm "objects". Java là một ngôn ngữ OOP thuần túy.

## 4 trụ cột của OOP

### 1. Encapsulation (Đóng gói)

Encapsulation là việc gói gọn dữ liệu và phương thức trong một class, che giấu implementation details.

\`\`\`java
public class BankAccount {
    private double balance; // private field
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
\`\`\`

### 2. Inheritance (Kế thừa)

Cho phép class con kế thừa thuộc tính và phương thức từ class cha.

\`\`\`java
public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println(name + " says Woof!");
    }
}
\`\`\`

### 3. Polymorphism (Đa hình)

Cho phép một đối tượng có thể có nhiều hình thái khác nhau.

\`\`\`java
Animal myDog = new Dog();
myDog.eat(); // Polymorphism in action
\`\`\`

### 4. Abstraction (Trừu tượng)

Ẩn đi các chi tiết phức tạp, chỉ hiển thị những gì cần thiết.

\`\`\`java
public abstract class Shape {
    abstract double calculateArea();
}

public class Circle extends Shape {
    private double radius;
    
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}
\`\`\`

## Kết luận

OOP giúp code dễ bảo trì, tái sử dụng và mở rộng. Hãy thực hành thường xuyên để nắm vững các khái niệm này!
    `,
    category: 'java',
    date: '2024-12-20',
    readTime: '8 phút',
    tags: ['OOP', 'Java', 'Beginner'],
  },
  {
    id: 'java-collections',
    title: 'Java Collections Framework - Hướng dẫn toàn diện',
    excerpt: 'Khám phá Collections Framework trong Java: List, Set, Map và cách sử dụng hiệu quả trong các dự án thực tế.',
    content: `
# Java Collections Framework

Collections Framework cung cấp các cấu trúc dữ liệu và thuật toán để lưu trữ và xử lý dữ liệu hiệu quả.

## Các interface chính

### List - Danh sách có thứ tự

\`\`\`java
// ArrayList - truy cập nhanh bằng index
List<String> arrayList = new ArrayList<>();
arrayList.add("Java");
arrayList.add("Python");
arrayList.get(0); // "Java"

// LinkedList - thêm/xóa nhanh
List<String> linkedList = new LinkedList<>();
linkedList.addFirst("First");
linkedList.addLast("Last");
\`\`\`

### Set - Tập hợp không trùng lặp

\`\`\`java
// HashSet - không thứ tự
Set<Integer> hashSet = new HashSet<>();
hashSet.add(1);
hashSet.add(2);
hashSet.add(1); // Không thêm được, đã tồn tại

// TreeSet - có thứ tự
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(3);
treeSet.add(1);
treeSet.add(2);
// Kết quả: [1, 2, 3]
\`\`\`

### Map - Cặp key-value

\`\`\`java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);

int aliceScore = scores.get("Alice"); // 95

// Duyệt Map
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
\`\`\`

## Stream API (Java 8+)

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Filter và transform
List<Integer> evenDoubled = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .collect(Collectors.toList());
// Kết quả: [4, 8]
\`\`\`

## Best Practices

1. **Chọn đúng Collection**: ArrayList cho random access, LinkedList cho insert/delete
2. **Sử dụng Generics**: Tránh raw types
3. **Prefer Interface**: Khai báo biến bằng interface (List, Set, Map)
    `,
    category: 'java',
    date: '2024-12-18',
    readTime: '10 phút',
    tags: ['Collections', 'Java', 'Data Structures'],
  },
  {
    id: 'java-streams',
    title: 'Java Streams API - Xử lý dữ liệu hiện đại',
    excerpt: 'Học cách sử dụng Streams API để xử lý collections một cách declarative và hiệu quả.',
    content: `
# Java Streams API

Streams API được giới thiệu trong Java 8, cho phép xử lý dữ liệu theo phong cách functional programming.

## Tạo Stream

\`\`\`java
// Từ Collection
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream1 = list.stream();

// Từ Array
String[] array = {"x", "y", "z"};
Stream<String> stream2 = Arrays.stream(array);

// Stream.of()
Stream<Integer> stream3 = Stream.of(1, 2, 3, 4, 5);
\`\`\`

## Intermediate Operations

### filter() - Lọc phần tử

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// [2, 4, 6]
\`\`\`

### map() - Biến đổi phần tử

\`\`\`java
List<String> names = Arrays.asList("alice", "bob", "charlie");

List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
// ["ALICE", "BOB", "CHARLIE"]
\`\`\`

### sorted() - Sắp xếp

\`\`\`java
List<Integer> sorted = numbers.stream()
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList());
\`\`\`

## Terminal Operations

\`\`\`java
// reduce() - Tổng hợp
int sum = numbers.stream()
    .reduce(0, Integer::sum);

// count()
long count = numbers.stream()
    .filter(n -> n > 3)
    .count();

// findFirst()
Optional<Integer> first = numbers.stream()
    .filter(n -> n > 3)
    .findFirst();
\`\`\`

## Parallel Streams

\`\`\`java
// Xử lý song song
long count = list.parallelStream()
    .filter(s -> s.length() > 3)
    .count();
\`\`\`

Streams API giúp code ngắn gọn, dễ đọc và có thể tận dụng multi-core processors!
    `,
    category: 'java',
    date: '2024-12-15',
    readTime: '7 phút',
    tags: ['Streams', 'Java 8', 'Functional'],
  },
  {
    id: 'js-async-await',
    title: 'Async/Await trong JavaScript',
    excerpt: 'Làm chủ lập trình bất đồng bộ với async/await - cách viết code async như sync.',
    content: `
# Async/Await trong JavaScript

Async/await là syntax sugar cho Promises, giúp viết code bất đồng bộ dễ đọc hơn.

## Callback Hell Problem

\`\`\`javascript
// Callback hell - khó đọc và maintain
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c);
        });
    });
});
\`\`\`

## Promise - Giải pháp đầu tiên

\`\`\`javascript
getData()
    .then(a => getMoreData(a))
    .then(b => getEvenMoreData(b))
    .then(c => console.log(c))
    .catch(err => console.error(err));
\`\`\`

## Async/Await - Elegant Solution

\`\`\`javascript
async function fetchAllData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getEvenMoreData(b);
        console.log(c);
    } catch (err) {
        console.error(err);
    }
}
\`\`\`

## Parallel Execution

\`\`\`javascript
// Chạy song song với Promise.all
async function fetchParallel() {
    const [users, posts, comments] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments()
    ]);
    
    return { users, posts, comments };
}
\`\`\`

## Error Handling

\`\`\`javascript
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (err) {
            if (i === retries - 1) throw err;
            await delay(1000 * (i + 1)); // Exponential backoff
        }
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
\`\`\`

## Best Practices

1. Luôn sử dụng try/catch
2. Sử dụng Promise.all() cho parallel operations
3. Tránh await trong vòng lặp khi có thể chạy song song
    `,
    category: 'javascript',
    date: '2024-12-22',
    readTime: '6 phút',
    tags: ['Async', 'JavaScript', 'ES6+'],
  },
  {
    id: 'js-closures',
    title: 'Closures trong JavaScript - Giải thích đơn giản',
    excerpt: 'Hiểu rõ về closures - một trong những khái niệm quan trọng nhất của JavaScript.',
    content: `
# Closures trong JavaScript

Closure là khi một function "nhớ" các biến từ scope bên ngoài của nó, ngay cả khi function đó được thực thi ở nơi khác.

## Ví dụ cơ bản

\`\`\`javascript
function createGreeting(greeting) {
    // greeting được "đóng gói" trong closure
    return function(name) {
        return \`\${greeting}, \${name}!\`;
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHi("Bob"));      // "Hi, Bob!"
\`\`\`

## Private Variables

\`\`\`javascript
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// counter.count -> undefined (private!)
\`\`\`

## Factory Functions

\`\`\`javascript
function createPerson(name, age) {
    return {
        getName() { return name; },
        getAge() { return age; },
        haveBirthday() {
            age++;
            return \`Happy birthday! Now \${age} years old.\`;
        }
    };
}

const person = createPerson("John", 25);
console.log(person.haveBirthday()); // "Happy birthday! Now 26 years old."
\`\`\`

## Common Pitfall: Loop + Closure

\`\`\`javascript
// BUG: Tất cả đều in ra 3
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// FIX 1: Dùng let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// FIX 2: Dùng IIFE
for (var i = 0; i < 3; i++) {
    ((j) => {
        setTimeout(() => console.log(j), 100);
    })(i);
}
\`\`\`

Closures là nền tảng cho nhiều pattern trong JavaScript: module pattern, event handlers, callbacks, và hơn thế nữa!
    `,
    category: 'javascript',
    date: '2024-12-19',
    readTime: '5 phút',
    tags: ['Closures', 'JavaScript', 'Core Concepts'],
  },
  {
    id: 'js-es6-features',
    title: 'ES6+ Features mọi developer cần biết',
    excerpt: 'Tổng hợp các tính năng quan trọng của ES6 và các phiên bản JavaScript mới hơn.',
    content: `
# ES6+ Features

ES6 (ECMAScript 2015) mang đến nhiều tính năng mới làm JavaScript hiện đại và mạnh mẽ hơn.

## Arrow Functions

\`\`\`javascript
// Truyền thống
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Với một tham số
const square = x => x * x;

// Lexical this
const obj = {
    name: "Object",
    greet: function() {
        setTimeout(() => {
            console.log(this.name); // "Object" - arrow function giữ context
        }, 100);
    }
};
\`\`\`

## Destructuring

\`\`\`javascript
// Object destructuring
const person = { name: "Alice", age: 25, city: "Hanoi" };
const { name, age } = person;

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Default values
const { country = "Vietnam" } = person;

// Rename
const { name: personName } = person;
\`\`\`

## Spread & Rest Operators

\`\`\`javascript
// Spread - expand
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest - collect
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
\`\`\`

## Template Literals

\`\`\`javascript
const name = "World";
const greeting = \`Hello, \${name}!\`;

// Multi-line strings
const html = \`
    <div>
        <h1>\${title}</h1>
        <p>\${content}</p>
    </div>
\`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => 
        acc + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : ''), ''
    );
}
\`\`\`

## Optional Chaining & Nullish Coalescing

\`\`\`javascript
// Optional chaining (?.)
const city = user?.address?.city; // undefined nếu không tồn tại

// Nullish coalescing (??)
const value = input ?? "default"; // Chỉ dùng default nếu null/undefined
\`\`\`

Các tính năng này giúp code ngắn gọn và an toàn hơn!
    `,
    category: 'javascript',
    date: '2024-12-16',
    readTime: '8 phút',
    tags: ['ES6', 'JavaScript', 'Modern JS'],
  },
  {
    id: 'java-exception-handling',
    title: 'Exception Handling trong Java',
    excerpt: 'Xử lý ngoại lệ đúng cách trong Java: try-catch, custom exceptions và best practices.',
    content: `
# Exception Handling trong Java

Exception handling là cơ chế xử lý các lỗi runtime, giúp chương trình robust và reliable hơn.

## Cấu trúc try-catch-finally

\`\`\`java
try {
    // Code có thể throw exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Xử lý exception cụ thể
    System.out.println("Cannot divide by zero!");
} catch (Exception e) {
    // Xử lý các exception khác
    System.out.println("Something went wrong: " + e.getMessage());
} finally {
    // Luôn được thực thi
    System.out.println("Cleanup code here");
}
\`\`\`

## Checked vs Unchecked Exceptions

\`\`\`java
// Checked Exception - phải handle hoặc khai báo throws
public void readFile(String path) throws IOException {
    FileReader reader = new FileReader(path);
    // ...
}

// Unchecked Exception (RuntimeException) - không bắt buộc handle
public void divide(int a, int b) {
    if (b == 0) {
        throw new IllegalArgumentException("Divisor cannot be zero");
    }
    return a / b;
}
\`\`\`

## Custom Exceptions

\`\`\`java
public class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Need: " + amount);
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}

// Sử dụng
public void withdraw(double amount) throws InsufficientFundsException {
    if (balance < amount) {
        throw new InsufficientFundsException(amount - balance);
    }
    balance -= amount;
}
\`\`\`

## Try-with-Resources (Java 7+)

\`\`\`java
// Tự động close resources
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} // reader tự động được close
\`\`\`

## Best Practices

1. **Catch specific exceptions** trước, general sau
2. **Don't catch Exception** nếu không cần thiết
3. **Use try-with-resources** cho AutoCloseable resources
4. **Log exceptions** với đủ context
5. **Don't use exceptions for flow control**
    `,
    category: 'java',
    date: '2024-12-12',
    readTime: '7 phút',
    tags: ['Exception', 'Java', 'Error Handling'],
  },
  {
    id: 'js-dom-manipulation',
    title: 'DOM Manipulation - Tương tác với HTML',
    excerpt: 'Học cách thao tác với DOM để tạo các trang web động và tương tác.',
    content: `
# DOM Manipulation

DOM (Document Object Model) cho phép JavaScript truy cập và thay đổi nội dung, cấu trúc và style của trang web.

## Selecting Elements

\`\`\`javascript
// Single element
const header = document.getElementById('header');
const firstBtn = document.querySelector('.btn');

// Multiple elements
const allBtns = document.querySelectorAll('.btn');
const links = document.getElementsByTagName('a');

// Traversing
const parent = element.parentElement;
const children = element.children;
const nextSibling = element.nextElementSibling;
\`\`\`

## Modifying Content

\`\`\`javascript
// Text content
element.textContent = 'New text';
element.innerHTML = '<strong>Bold text</strong>';

// Attributes
element.setAttribute('data-id', '123');
element.getAttribute('href');
element.removeAttribute('disabled');

// Classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
element.classList.contains('active'); // true/false
\`\`\`

## Creating & Removing Elements

\`\`\`javascript
// Create
const newDiv = document.createElement('div');
newDiv.className = 'card';
newDiv.innerHTML = '<h2>Title</h2><p>Content</p>';

// Append
parent.appendChild(newDiv);
parent.insertBefore(newDiv, referenceElement);
parent.insertAdjacentHTML('beforeend', '<div>HTML</div>');

// Remove
element.remove();
parent.removeChild(child);
\`\`\`

## Event Handling

\`\`\`javascript
// addEventListener
button.addEventListener('click', function(event) {
    console.log('Clicked!', event.target);
});

// Event delegation
document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        console.log('Button clicked:', e.target.textContent);
    }
});

// Common events
// click, dblclick, mouseenter, mouseleave
// keydown, keyup, keypress
// submit, change, input, focus, blur
// scroll, resize, load, DOMContentLoaded
\`\`\`

## Styling

\`\`\`javascript
// Inline styles
element.style.backgroundColor = '#fff';
element.style.cssText = 'color: red; font-size: 16px;';

// Get computed styles
const styles = getComputedStyle(element);
console.log(styles.fontSize);
\`\`\`

DOM manipulation là kỹ năng thiết yếu cho frontend development!
    `,
    category: 'javascript',
    date: '2024-12-10',
    readTime: '9 phút',
    tags: ['DOM', 'JavaScript', 'Frontend'],
  },
  {
    id: 'java-multithreading',
    title: 'Multithreading trong Java',
    excerpt: 'Tìm hiểu về lập trình đa luồng trong Java: Thread, Runnable, synchronization và ExecutorService.',
    content: `
# Multithreading trong Java

Multithreading cho phép chương trình thực hiện nhiều tác vụ đồng thời, tận dụng tối đa CPU.

## Tạo Thread

### Extend Thread class

\`\`\`java
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

MyThread thread = new MyThread();
thread.start(); // Không gọi run() trực tiếp!
\`\`\`

### Implement Runnable

\`\`\`java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Running in: " + Thread.currentThread().getName());
    }
}

Thread thread = new Thread(new MyRunnable());
thread.start();

// Lambda (Java 8+)
Thread thread2 = new Thread(() -> {
    System.out.println("Lambda thread!");
});
\`\`\`

## Synchronization

\`\`\`java
class Counter {
    private int count = 0;
    
    // Synchronized method
    public synchronized void increment() {
        count++;
    }
    
    // Synchronized block
    public void incrementBlock() {
        synchronized(this) {
            count++;
        }
    }
}
\`\`\`

## ExecutorService (Modern Approach)

\`\`\`java
// Thread pool
ExecutorService executor = Executors.newFixedThreadPool(4);

// Submit tasks
executor.submit(() -> {
    System.out.println("Task 1");
});

// With return value
Future<Integer> future = executor.submit(() -> {
    return 42;
});

int result = future.get(); // Blocking call

// Shutdown
executor.shutdown();
\`\`\`

## CompletableFuture (Java 8+)

\`\`\`java
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> fetchData())
    .thenApply(data -> processData(data))
    .thenApply(result -> formatResult(result));

future.thenAccept(System.out::println);

// Combine multiple futures
CompletableFuture<Void> allOf = CompletableFuture.allOf(
    future1, future2, future3
);
\`\`\`

## Thread Safety Tips

1. **Immutable objects** là thread-safe
2. Sử dụng **Atomic classes** (AtomicInteger, AtomicReference)
3. Prefer **ConcurrentHashMap** over synchronized HashMap
4. Sử dụng **volatile** cho visibility

Multithreading mạnh mẽ nhưng cần cẩn thận với race conditions và deadlocks!
    `,
    category: 'java',
    date: '2024-12-08',
    readTime: '10 phút',
    tags: ['Multithreading', 'Java', 'Concurrency'],
  },
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getPostsByCategory = (category: 'java' | 'javascript'): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};
