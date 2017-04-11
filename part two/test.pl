#!/usr/bin/perl

use DBI;
use strict;

my $driver = "SQLite"; 
my $database = "mainDB";
my $dsn = "DBI:$driver:database=$database";

my $dbh = DBI->connect($dsn) or die $DBI::errstr;

my $sth = $dbh->prepare("SELECT * FROM People");
$sth->execute() or die $DBI::errstr;

while (my @row = $sth->fetchrow_array()) {
  my ($id, $first_name, $last_name, $home ) = @row;
  if(!$last_name) {
    $last_name = "Unspecified";
  };
  print "First Name: $first_name, Last Name: $last_name, Home: $home\n";
};

$sth->finish();