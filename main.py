import MySQLdb
import MySQLdb.cursors

try:
	db = connect(host='grandcentral', 	user=‘cs123', passwd=‘cs123', 	db='grades')
except MySQLdb.Error, e:
	print "Error %d: %s" % (e.args[0], e.args[1])
	sys.exit(1)
c = db.cursor()
c.execute("SELECT ... FROM ...")
results = c.fetchall() # list of tuples
c.close()
