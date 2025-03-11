
#  This file is for flask. It integrates frontend with backend. 

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/solve', methods=['POST'])
def solve():
    num_vars = int(request.form.get("numVars"))
    num_constraints = int(request.form.get("numConstraints"))
    opt_type = request.form.get("optType")
    
    # Read cost function coefficients
    c = [float(request.form[f"c{i}"]) for i in range(num_vars)]
    
    # Read constraints
    A = []
    b = []
    for i in range(num_constraints):
        row = [float(request.form[f"a{i}_{j}"]) for j in range(num_vars)]
        A.append(row)
        b.append(float(request.form[f"b{i}"]))
    
    # Process data and solve Simplex (To be implemented)
    
    return render_template('simplex.html', A=A, b=b, c=c, opt_type=opt_type)

if __name__ == '__main__':
    app.run(debug=True)
