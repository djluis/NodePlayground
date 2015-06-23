# NodePlayground

# Requirements

- MongoDB 3.0.4+
- Node v0.12.5+

# Notes 

- Generate Random Data 
http://www.json-generator.com/
Template:
[
  '{{repeat(5, 100)}}',
  {
    name: '{{firstName()}} {{surname()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}'
  }
]



